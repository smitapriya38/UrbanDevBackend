-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: localhost    Database: urbandev
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ulb`
--

DROP TABLE IF EXISTS `ulb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ulb` (
  `ulb_id` int(11) NOT NULL AUTO_INCREMENT,
  `ulb_name` varchar(100) NOT NULL,
  `ulb_city_name` varchar(100) NOT NULL,
  `ulb_state` varchar(100) NOT NULL,
  PRIMARY KEY (`ulb_id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ulb`
--

LOCK TABLES `ulb` WRITE;
/*!40000 ALTER TABLE `ulb` DISABLE KEYS */;
INSERT INTO `ulb` VALUES (1,'Adityapur Municipal Corporation','Adityapur','jharkhand'),(2,'Chas Municipal Corporation','Chas','jharkhand'),(3,'Dhanbad Municipal Corporation','Dhanbad','jharkhand'),(4,'Deoghar Municipal Corporation','Deoghar','jharkhand'),(5,'Hazaribag Municipal Corporation','Hazaribag','jharkhand'),(6,'Giridih Municipal Corporation','Giridih','jharkhand'),(7,'Medininagar Municipal Corporation','Medininagar','jharkhand'),(8,'Mango Municipal Corporation','Mango','jharkhand'),(9,'Ranchi Municipal Corporation','Ranchi','jharkhand'),(10,'Bishrampur Nagar Parishad','Bishrampur','jharkhand'),(11,'Chatra Nagar Parishad','Chatra','jharkhand'),(12,'Chakradharpur Nagar Parishad','Chakradharpur','jharkhand'),(13,'Chaibasa Nagar Parishad','Chaibasa','jharkhand'),(14,'Dumka Nagar Parishad','Dumka','jharkhand'),(15,'Garhwa Nagar Parishad','Garhwa','jharkhand'),(16,'Gumla Nagar Parishad','Gumla','jharkhand'),(17,'Jhumritilaiya Nagar Parishad','Jhumritilaiya','jharkhand'),(18,'Ramgarh Nagar Parishad','Ramgarh','jharkhand'),(19,'Simdega Nagar Parishad','Simdega','jharkhand'),(20,'Sahibganj Nagar Parishad','Sahibganj','jharkhand'),(21,'Pakur Nagar Parishad','Pakur','jharkhand'),(22,'Phusro Nagar Parishad','Phusro','jharkhand'),(23,'Mihijham Nagar Parishad','Mihijham','jharkhand'),(24,'Madhupur Nagar Parishad','Madhupur','jharkhand'),(25,'Lohardaga Nagar Parishad','Lohardaga','jharkhand'),(26,'Jugsalai Nagar Parishad','Jugsalai','jharkhand'),(27,'Godda Nagar Parishad','Godda','jharkhand'),(28,'Chirkunda Nagar Parishad','Chirkunda','jharkhand'),(29,'Kapali Nagar Parishad','Kapali','jharkhand'),(30,'Basukinath Nagar Panchayat','Basukinath','jharkhand'),(31,' Bachra Nagar Panchayat','Bachra','jharkhand'),(32,'Barharwa Nagar Panchayat','Barharwa','jharkhand'),(33,'Bundu Nagar Panchayat','Bundu','jharkhand'),(34,'Chhattarpur Nagar Panchayat','Chhattarpur','jharkhand'),(35,'Chakuliya Nagar Panchayat','Chakuliya','jharkhand'),(36,'Domchach Nagar Panchayat','Domchach','jharkhand'),(37,'Hariharganj Nagar Panchayat','Hariharganj','jharkhand'),(38,'Hussainabad Nagar Panchayat','Hussainabad','jharkhand'),(39,'Jamtara Nagar Panchayat','Jamtara','jharkhand'),(40,'Khunti Nagar Panchayat','Khunti','jharkhand'),(41,'Koderma Nagar Panchayat','Koderma','jharkhand'),(42,'Latehar Nagar Panchayat','Latehar','jharkhand'),(43,'Mahagama Nagar Panchayat','Mahagama','jharkhand'),(44,'Nagar Uttari Nagar Panchayat','Nagar Uttari','jharkhand'),(45,'Rajmahal Nagar Panchayat','Rajmahal','jharkhand'),(46,'Saraikela Nagar Panchayat','Saraikela','jharkhand'),(47,'Manjhiaon Nagar Panchayat','Manjhiaon','jharkhand'),(48,'Badakisarai Nagar Panchayat','Badakisarai','jharkhand'),(49,'Jamshedpur NAC','Jamshedpur','jharkhand');
/*!40000 ALTER TABLE `ulb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-04 23:13:44
