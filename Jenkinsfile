pipeline {
    agent any

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
                sh 'npm ci'
            }
        }

        // stage('Install Playwright Browsers') {
        //     steps {
        //         sh 'npx playwright install --with-deps'
        //     }
        // }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
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
}