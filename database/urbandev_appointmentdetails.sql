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
-- Table structure for table `appointmentdetails`
--

DROP TABLE IF EXISTS `appointmentdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointmentdetails` (
  `apt_order_no` varchar(50) NOT NULL,
  `ad_letter_no` varchar(50) NOT NULL,
  `empid` varchar(50) NOT NULL,
  `ename` varchar(30) NOT NULL,
  `father_name` varchar(30) DEFAULT NULL,
  `contact` varchar(20) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `dob` date NOT NULL,
  `gender` char(10) NOT NULL,
  `marital_status` text NOT NULL,
  `category` char(20) NOT NULL,
  `religion` char(20) NOT NULL,
  `home_state` varchar(50) NOT NULL,
  `home_district` varchar(50) NOT NULL,
  `present_address` text,
  `permanent_address` text,
  `aadhaar` varchar(20) NOT NULL,
  `pan` varchar(20) DEFAULT NULL,
  `experience` varchar(30) DEFAULT NULL,
  `apt_order_date` date NOT NULL,
  `apt_status` varchar(20) NOT NULL,
  `emp_type` varchar(20) DEFAULT NULL,
  `designation` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`apt_order_no`),
  UNIQUE KEY `apt_order_no` (`apt_order_no`),
  KEY `empid` (`empid`),
  KEY `ad_letter_no` (`ad_letter_no`),
  CONSTRAINT `appointmentdetails_ibfk_1` FOREIGN KEY (`empid`) REFERENCES `joiningdetails` (`empid`),
  CONSTRAINT `appointmentdetails_ibfk_2` FOREIGN KEY (`ad_letter_no`) REFERENCES `advertisementdetails` (`ad_letter_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointmentdetails`
--

LOCK TABLES `appointmentdetails` WRITE;
/*!40000 ALTER TABLE `appointmentdetails` DISABLE KEYS */;
INSERT INTO `appointmentdetails` VALUES ('AP001','AD001','UD1001','Ramesh Singh','Shri Umesh Kumar Singh','8888999912','ramsn12@gmail.com','1990-06-20','male','married','general','hindu','Jharkhand','Ranchi','A-120, China Town, New Delhi-West','A-120, China Town, New Delhi-West','1400100023459087','APNG0450I',NULL,'2021-01-24','Appointed','employed',NULL);
/*!40000 ALTER TABLE `appointmentdetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-27 23:24:44
