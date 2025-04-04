pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
        
        stage('Deploy') {
            steps {
                // Use npx to run Netlify CLI without global installation
                withCredentials([string(credentialsId: 'token for ci/cd', variable: 'NETLIFY_AUTH_TOKEN')]) {
                    sh '''
                    echo "Deploying to Netlify..."
                    npx netlify-cli deploy --site astonishing-medovik-a2a2a3 --auth $NETLIFY_AUTH_TOKEN --prod --dir build --message "Deployed from Jenkins pipeline"
                    '''
                }
            }
        }
    }
}