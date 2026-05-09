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
            mail to: 'emanhatesschool1234@gmail.com',
                subject: "BUILD SUCCESS",
                body: "Good news! Build completed successfully."
        }
        failure {
            mail to: 'emanhatesschool1234@gmail.com',
                subject: "BUILD FAILED}",
                body: "Build has failed. Please check the logs."
        }
    }

}