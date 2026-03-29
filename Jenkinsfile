pipeline {
    agent { label 'playwright' }

    parameters {
        string(name: 'ENV', defaultValue: 'dev', description: 'Umgebung')
        // booleanParam(name: 'HEADLESS', defaultValue: true, description: 'Headless Mode')
    }

    tools {
        nodejs 'NodeJS_25' // Name aus Jenkins-Konfiguration
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/kmennat/e2e_Tests.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
               bat 'npm ci --prefer-offline'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --headed'
            }
        }

        // stage('Archive Report') {
        //     steps {
        //         archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        //     }
        // }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Tests failed!'
        }
    }
    post {
        always {
            publishHTML([
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
}