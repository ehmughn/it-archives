pipeline {
    agent any

    environment {
        APP_NAME = 'it-archives'
        BUILD_DIR = 'dist'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archiving build artifacts...'
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
            }
        }

        stage('Deploy') {
            steps {
                echo 'Simulating deployment...'
                bat 'mkdir deployed-app'
                bat 'xcopy dist deployed-app /E /I /Y'
                echo 'Application deployed to deployed-app folder'
            }
        }
    }

    post {
        success {
            mail to: 'your-email@example.com',
                subject: "BUILD SUCCESS: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Good news! Build ${env.BUILD_URL} completed successfully."
        }
        failure {
            mail to: 'your-email@example.com',
                subject: "BUILD FAILED: ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: "Build ${env.BUILD_URL} has failed. Please check the logs."
        }
    }

}