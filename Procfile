# By default, Heroku looks for target folder in project root (java -Dserver.port=$PORT $JAVA_OPTS -jar target/[app-name].jar).
# Since we have modularized the project, we need to specify a custom path ourselves. Otherwise, the app won't start in Heroku

web: java -Dserver.port=$PORT $JAVA_OPTS -jar backend/target/backend-0.0.1-SNAPSHOT.jar