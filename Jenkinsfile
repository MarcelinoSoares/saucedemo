pipeline {
    agent any
    
    tools {
        nodejs 'Node16'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npm install -g allure-commandline'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npx cypress run --env allure=true'
            }
        }
        
        stage('Generate Report') {
            steps {
                sh 'allure generate allure-results --clean -o allure-report'
            }
        }
    }
    
    post {
        always {
            allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
            ])
        }
    }
}
