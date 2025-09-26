# code_standard

## ESLint

1. Open VS Code and goto Extensions

2. Search "ESLint" and Install

3. Create ESLint configuration by run "npx eslint --init" command

4. Run "npx eslint ." command and check problems




## SonarQube

1. Download & Install "docker" and open

2. Search "sonarqube" on docker and Pull

3. Run sonarqube container with default port "9000"

4. Open URL on your browser [http://localhost:9000] (Username: admin & Password: admin)

5. Download "Sonar-Scanner" from [https://docs.sonarsource.com/sonarqube-community-build/analyzing-source-code/scanners/sonarscanner/]

6. Set environment path for sonar-scanner

7. Create file "sonar-project.properties" on your project root folder
```
# required metdata
sonar.projectKey=project_name
sonar.organization=org_name
sonar.projectVersion=project_version
sonar.sourceEncoding=UTF-8
#sonar.language=js
#sonar.eslint.eslintconfigpath=app/eslintrc.json

# path to srouce directories
sonar.sources=src
# sonar.tests=app/test/integration/api/

# excludes
sonar.exclusions=node_modules/*,coverage/*,vendor/*,migration/*

# coverage reporting
#sonar.javascript.lcov.reportPaths=coverage/lcov.info
# sonar.surefire.reportPaths=app/coverage/lcov-report

sonar.token=your_sonarqube_user_token
```

8. Run "sonar-scanner" command in your project root folder

9. Goto step-4, open your project and see the reports
