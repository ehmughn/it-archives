# IT Archives

## Overview

IT Archives is my personal archive on the courses I took. Lessons in this app does not reflect on what I learned or what you should learn.

## Deployment

The project is deployed here: [https://ehmughn.github.io/it-archives/](https://ehmughn.github.io/it-archives/)

## Setup Instructions

### Pre-requisites

- **Node.js**: Version 16 or higher.
- **Git**: For cloning the repository.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/it-archives.git
   cd it-archives
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open `http://localhost:4000` (or the port specified by Vite) in your browser.

## Development Notes

- **Course Data**: The `CoursesInformation.tsx` file contains all the courses and their corresponding data. There are instructions given in that file, please use with caution editing that file.
- **Dependencies**: The project only depends on `react@19.1.1` and `react-dom@19.1.1` as of making this markdown. The following must appear in `package.json`:
  ```json
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## Contact

For questions or feedback, please contact [emanhatesschool1234@gmail.com](mailto:emanhatesschool1234@gmail.com).
