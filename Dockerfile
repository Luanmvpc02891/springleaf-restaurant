FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app/springleaf_restaurant_backend
COPY ./springleaf_restaurant_backend 
RUN mvn clean package -DskipTests


FROM openjdk:17.0.1-jdk-slim
COPY --from=build /app/springleaf_restaurant_backend/target/demo-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "demo.jar"]
