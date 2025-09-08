# Use the official Python image as the base image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Copy the application code into the container
COPY . /app

# Install the required Python packages
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]
