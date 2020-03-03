# Create a .env file, use the .env.example
# Create an admin user (santiagoemp01@gmail.com)
RUN: node -r dotenv/config omnib\src\utils\scripts\mongo\seedAdminUser.js
# Create an apikeys
RUN: node -r dotenv/config omnib\src\utils\scripts\mongo\seedApiKeys.js
When you run this script, you have to go to your database and copy the tokens in the .env file

# Kill port in Windows
netstat -ano | findStr 3000
// Get the process id
taskkill /pid {processId} /f

# Kill port in linux
fuser -k tcp/3000