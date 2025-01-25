![Monika Verein](assets/logo.svg)

# Monika Verein

**Monika Verein** is a non-profit organization dedicated to empowering communities through education, integration, and social support initiatives. They focus on fostering inclusivity and providing resources to help individuals thrive in diverse environments.

## Features

- **Payment options:** International donations can be processed quickly and effortlessly. *[Currently Under Developement]*

## Installation

To set up the **Monika Verein** API, follow these steps:

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Clone the Repository

```bash
git clone https://github.com/Anniedevkiller/Hng_scrum.git
cd Hng_scrum/nbackend
```

### Create a Virtual Environment (Optional but recommended)

```
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
```

### Install Dependencies

```
pip install -r requirements.txt
```

### Run the Application

To start the FastAPI application, use the following command:

```
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

or run

```
fastapi dev
```

#### Testing the Application

Set the Python Path for Tests
Export the PYTHONPATH variable to include your project directory.

On Windows (Command Prompt):

```
set PYTHONPATH=C:\Users\<YourUsername>\Documents\Projects\Hng_scrum\backend
```

On Windows (PowerShell):

```
$env:PYTHONPATH="C:\Users\<YourUsername>\Documents\Projects\Hng_scrum\backend"
```

### Run Tests with Pytest

Navigate to the root directory of the project:

```
cd C:\Users\<YourUsername>\Documents\Projects\Hng_scrum\backend
```

Run the following command to execute all test cases:

```
    pytest
```

### Running a Specific Test File

To run tests in a specific file, use:

```
pytest tests/path/to/test_file.py
```

For example:

```
pytest tests/v1/stripe/test_stripe.py
```

### Viewing Detailed Test Logs

To view detailed test output, use the -v (verbose) flag:

```
pytest -v
```

Debugging Test Failures

To debug test failures, use the --pdb flag to enable an interactive debugger:

```
pytest --pdb
```

### Generating a Coverage Report

To ensure your tests cover the codebase effectively, you can install pytest-cov and run:

```
pip install pytest-cov
pytest --cov=backend
```

This will generate a test coverage report for your application.

### Access the API

Open your web browser and navigate to `http://localhost:8000/docs` to access the interactive API documentation (Swagger UI).

### Usage

Once the application is running, you can interact with the API endpoints to access various features like personalized recommendations, itinerary management, and more.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository[Still under debate].
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push to your branch.
5. Open a pull request.

### Contact

For questions or feedback, please reach out to [ayobamideleewetuga@gmail.com](mailto:ayobamideleewetuga@gmail.com).

---
