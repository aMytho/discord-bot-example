# Automatically installs nestjs globally. If this fails you can run npm i @nestjs/cli -g in your terminal to install it. 
FROM gitpod/workspace-base:latest

# Installs the setup script
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
# Installs nodejs and npm
RUN sudo apt-get install -y nodejs
# Installs nestjs cli globally
RUN sudo npm install @nestjs/cli -g