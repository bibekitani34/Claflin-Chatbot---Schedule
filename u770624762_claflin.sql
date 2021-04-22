-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 22, 2021 at 03:10 AM
-- Server version: 10.3.24-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u770624762_claflin`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `id` int(11) NOT NULL,
  `gid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `whn` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `board` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `type` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `class` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `course` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `yr` char(4) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`id`, `gid`, `whn`, `board`, `type`, `class`, `course`, `yr`) VALUES
(17, '17', '2', 'Y', 'F', 'U', '57', '2018'),
(22, '22', '2', '', '', 'G', '', '2017'),
(23, '23', '', '', '', '', '', ''),
(24, '2', '2', 'Y', 'F', 'U', '1', '2018'),
(25, '3', '2', 'Y', 'F', 'G', '1', '2018'),
(26, '18', '', '', '', '', '', ''),
(27, '20', '0', '', '', '', '', '2018'),
(28, '21', '', '', '', '', '', ''),
(29, '19', '2', '', '', '', '', '2018'),
(30, '5', '', '', '', '', '', ''),
(31, '4', '', '', '', '', '', ''),
(32, '24', '', '', '', '', '', ''),
(33, '25', '', '', '', '', '', ''),
(34, '26', '', '', '', '', '', ''),
(35, '27', '', '', '', '', '', ''),
(36, '28', '', '', '', '', '', ''),
(37, '29', '', '', '', '', '', ''),
(38, '30', '', '', '', '', '', ''),
(39, '31', '', '', '', '', '', ''),
(40, '32', '', '', '', '', '', ''),
(41, '33', '', '', '', '', '', ''),
(42, '34', '', '', '', '', '', ''),
(43, '35', '', '', '', '', '', ''),
(44, '36', '', '', '', '', '', ''),
(45, '37', '', '', '', '', '', ''),
(46, '38', '', '', '', '', '', ''),
(47, '39', '', '', '', '', '', ''),
(48, '40', '', '', '', '', '', ''),
(49, '41', '', '', '', '', '', ''),
(50, '42', '', '', '', '', '', ''),
(51, '43', '', '', '', '', '', ''),
(52, '44', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` smallint(6) NOT NULL,
  `name` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `code` varchar(3) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `countries`
--

INSERT INTO `countries` (`id`, `name`, `code`) VALUES
(245, 'United States', '01'),
(262, 'Nepal', '011'),
(363, 'France', '012');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` smallint(6) NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `dg` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `clas` char(1) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `type`, `dg`, `clas`) VALUES
(1, 'Computer Science', 'J', 'B.S.', 'U'),
(46, 'African and African American Studies', 'J', 'B.A.', 'U'),
(47, 'American Studies', 'N', '', 'U'),
(48, 'Applied Computing Minor', 'N', '', 'U'),
(49, 'Art Education', 'J', 'B.A.', 'U'),
(50, 'BioChemistry', 'J', 'B.S.', 'U'),
(51, 'BioInformatics', 'J', 'B.S.', 'U'),
(52, 'Biology', 'J', 'B.S.', 'U'),
(53, 'Biology', 'N', '', 'U'),
(54, 'Biotechnology', 'J', 'B.S.', 'U'),
(55, 'Business Administration', 'J', 'B.S.', 'U'),
(56, 'Chemistry', 'J', 'B.S.', 'U'),
(57, 'Computer Engineering', 'J', 'B.S.', 'U'),
(59, 'Creative Writing', 'N', '', 'U'),
(60, 'Criminal Justice', 'N', 'B.A.', 'U'),
(61, 'Digital Design', 'J', 'B.A.', 'U'),
(62, 'Drama', 'N', '', 'U'),
(63, 'Early Childhood Education', 'J', 'B.S.', 'U'),
(64, 'Elementary Education', 'J', 'B.S.', 'U'),
(65, 'English', 'N', 'B.A.', 'U'),
(66, 'English Education', 'J', 'B.A.', 'U'),
(67, 'Environmental Science', 'J', 'B.S.', 'U'),
(68, 'Foreign Language', 'J', 'B.A.', 'U'),
(69, 'Gender Studies', 'N', '', 'U'),
(70, 'Human Performance and Recreation', 'J', 'B.S.', 'U'),
(71, 'Management Information Science', 'J', 'B.S.', 'U'),
(72, 'Marketing', 'J', 'B.S.', 'U'),
(73, 'Mass Communications', 'J', 'B.A.', 'U'),
(74, 'Mathematics', 'J', 'B.S.', 'U'),
(75, 'Mathematics Education', 'J', 'B.S.', 'U'),
(76, 'Middle Level Education', 'J', 'B.S.', 'U'),
(77, 'Music', 'J', 'B.A.', 'U'),
(78, 'Music Education', 'J', 'B.A.', 'U'),
(79, 'Organizational Management', 'J', 'B.S.', 'U'),
(80, 'Philosophy and Religion', 'J', 'B.A.', 'U'),
(81, 'PK-12 and Secondary Education Programs', 'J', 'B.S.', 'U'),
(82, 'Political Science', 'N', '', 'U'),
(83, 'Psychology', 'N', '', 'U'),
(84, 'RN to BSN in Nursing', 'J', 'B.S.', 'U'),
(85, 'Sociology', 'N', '', 'U'),
(86, 'Sport Management', 'J', 'B.S.', 'U'),
(87, 'Studio Art', 'J', 'B.A.', 'U'),
(88, 'Political Science', 'J', 'B.A.', 'U'),
(89, 'Psychology', 'J', 'B.A.', 'U'),
(90, 'Sociology', 'J', 'B.A.', 'U'),
(91, 'English', 'J', 'B.A.', 'U'),
(92, 'Criminal Justice', 'J', 'B.A.', 'U');

-- --------------------------------------------------------

--
-- Table structure for table `docs`
--

CREATE TABLE `docs` (
  `id` int(11) NOT NULL,
  `did` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `docs`
--

INSERT INTO `docs` (`id`, `did`, `name`, `adate`, `atime`) VALUES
(39, '23', 'one plus.png', '2020-01-13', '09:18 PM');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` int(11) NOT NULL,
  `gid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `type` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `notes` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `gid`, `type`, `name`, `notes`, `adate`, `atime`) VALUES
(23, '3', 'S', 'Canada', '', '2020-01-13', '09:18 PM');

-- --------------------------------------------------------

--
-- Table structure for table `enrolled`
--

CREATE TABLE `enrolled` (
  `id` int(11) NOT NULL,
  `uid` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `stdid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `enro` char(1) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `clas` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `whn` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `yr` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `enrolled`
--

INSERT INTO `enrolled` (`id`, `uid`, `stdid`, `enro`, `phone`, `email`, `clas`, `whn`, `yr`, `adate`, `atime`) VALUES
(2, '3', '1224457', 'N', '(+1) 800000000', 'bitani@claflin.edu', 'U', '2', '2018', '2018-12-05', '03:51 AM'),
(3, '2', '127591', 'Y', '(+1) 8035003694', 'egyekyeattapenkra@claflin.edu', 'U', '2', '2018', '2018-12-05', '03:54 AM'),
(4, '4', '516324', 'Y', '', 'sewell@claflin.edu', 'U', '2', '2017', '2018-12-05', '07:04 AM'),
(5, '5', '124458', 'N', '', '', 'U', '2', '2016', '2018-12-06', '03:37 AM'),
(6, '21', '123123', 'N', '', 'pcrawford@claflin.edu', 'U', '0', '2019', '2018-12-06', '07:00 PM'),
(7, '17', '121121', 'N', '(+1) 8035585589', 'eanim@claflin.edu', 'U', '0', '2019', '2018-12-08', '05:55 AM'),
(8, '18', '1455777', 'N', '', '', 'U', '2', '2016', '2018-12-12', '07:07 PM'),
(9, '23', '24212141', 'N', '', '', 'U', '2', '2018', '2018-12-13', '12:15 AM'),
(10, '19', '124457', 'N', '', '', 'U', '1', '2003', '2020-11-18', '03:59 AM');

-- --------------------------------------------------------

--
-- Table structure for table `extras`
--

CREATE TABLE `extras` (
  `id` bigint(20) NOT NULL,
  `gid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `type` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cons` text COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `family`
--

CREATE TABLE `family` (
  `id` int(11) NOT NULL,
  `gid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `rel` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `title` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `mname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gen` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `high` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `loc` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `alr` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `family`
--

INSERT INTO `family` (`id`, `gid`, `rel`, `title`, `fname`, `mname`, `lname`, `gen`, `email`, `phone`, `high`, `loc`, `alr`, `adate`, `atime`) VALUES
(8, '17', '1', '2', 'Daa', 'Anim', 'Addo', 'M', 'daaanimaddo@gmail.com', '0220255664', '2', '19', 'N', '2018-12-10', '04:16 PM'),
(9, '3', '0', '3', 'Shova', '', 'Simkhada', 'F', 'sitani@yahoo.com', '+9779849366321', '5', '20', 'Y', '2018-12-10', '07:13 PM');

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `id` int(11) NOT NULL,
  `pic` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `gender` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `dob` varchar(34) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `loc` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`id`, `pic`, `fname`, `lname`, `pname`, `gender`, `dob`, `email`, `phone`, `loc`, `adate`, `atime`) VALUES
(3, 'I_87950519.png', 'Ram', 'Dharel', 'rdharel@gmail.com', 'I', '2021-04-20 05:25:00', '12:15', '(+977) 9175283742', '1', '2018-11-30', '05:56 PM'),
(22, 'I_56312239.jpg', 'Fred', 'Lodge', 'flodge@USA.com', 'N', '2021-04-25 8:25:00', '14:15', '(+0) 37583782', '21', '2018-12-10', '07:18 PM'),
(38, '', 'Lionel', 'Messi', 'lmessi@barcelona.com', 'H', '2021-04-22 15:00:00', '15:00', '(+1) 9804755466', '248', '2021-04-21', '04:43 AM'),
(39, '', 'Bimal', 'Itani', 'bimal@gmail.com', 'H', '2021-05-01 14:00:00', '14:00', '(+1) 9823538113', '249', '2021-04-22', '12:23 AM'),
(41, '', 'Eric', 'Minor', 'eminor@gmail.com', 'N', '2021-05-02 13:00:00', '13:00', '(+1) 9804755466', '251', '2021-04-22', '12:55 AM'),
(42, '', 'Sterling', 'George', 'sgeorge@claflin.edu', 'L', '2021/19/04 15:00:00', '09:21', '(+1) 80377777777', '252', '2021-04-22', '01:22 AM'),
(43, '', 'Michael', 'Jordan', 'Iam23@jordan.com', 'N', '2021/18/06 13:00:00', '12:00', '(+1) 803233-2345', '253', '2021-04-22', '01:27 AM'),
(44, '', 'Michael', 'Jordan', 'Iam23@jordan.com', 'N', '2021/06/12', '12:00', '(+1) 803233-2345', '254', '2021-04-22', '02:02 AM');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` smallint(5) NOT NULL,
  `prov` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `ct` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `zip` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `prov`, `ct`, `zip`, `address`) VALUES
(1, '4', 'Khahare', '45100', 'Khahare, Salyankot'),
(2, '2', 'Orangeburg', '29115', 'Bantama'),
(3, '20', 'Port Antonio', '', ''),
(4, '14', 'Butwal', '', ''),
(10, '2', 'Kumasi', '00233', ''),
(11, '19', 'Dadeldhura', '', ''),
(12, '2', 'Available', '', ''),
(13, '1', 'Kathmandu', '44600', 'Nepaltar'),
(14, '21', 'Available', '29115', '1184 Woodbine Drive'),
(19, '8', 'Zamzugu', '00233', 'Plt. 1 Blk 123'),
(20, '1', 'Dhading', '45100', 'Khahare, Salyankot'),
(21, '2', 'Orangeburg', '29115', '400 Magnolia St'),
(22, '1', 'Kathmandu', '44600', 'Bagbazar'),
(25, '2', 'Available', '', ''),
(31, '1', 'Available', '44600', ''),
(33, '22', 'Orangeburg', '29115', ''),
(34, '23', 'Orangeburg', '29115', ''),
(35, '24', 'Thamel', '44600', ''),
(36, '25', 'Kathmandu', '29115', ''),
(37, '26', 'Orangeburg', '29115', ''),
(38, '26', 'Orangeburg', '29115', ''),
(39, '26', 'Orangeburg', '29115', ''),
(40, '27', 'Orangeburg', '29115', ''),
(41, '28', 'Orangeburg', '29115', ''),
(42, '29', 'Orangeburg', '29115', ''),
(43, '30', 'Columbia', '29209-2356', ''),
(245, '1', 'Available', '', ''),
(247, '26', 'Sumter', '29152', ''),
(248, '31', 'Miami', '557890', ''),
(249, '32', 'Kathmandu', '44600', ''),
(250, '33', 'Itani', '44600', ''),
(251, '34', 'Sumter', '29115', ''),
(252, '35', 'Columbia', '29209-2356', ''),
(253, '36', 'Columbia', '29209-2356', ''),
(254, '37', 'Columbia', '29209-2356', '');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` smallint(6) NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pw` varchar(50) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `pw`) VALUES
(1, 'bibekitani@gmail.com', 'schoolbase'),
(6, 'dmorrison@claflin.edu', 'claflin123'),
(9, 'ourteam@claflin.edu', 'TeamWork');

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` smallint(6) NOT NULL,
  `countries` varchar(3) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `countries`, `name`) VALUES
(1, '262', 'Bagmati'),
(2, '245', 'South Carolina'),
(3, '245', 'North Carolina'),
(4, '262', 'Bagmati'),
(9, '245', 'Florida'),
(10, '245', 'New York'),
(11, '245', 'Washington'),
(12, '262', 'Gandaki'),
(13, '262', 'Karnali'),
(15, '262', 'Lumbini'),
(18, '262', 'Province1'),
(19, '262', 'Province2'),
(21, '245', 'Florida'),
(22, '245', 'North Dakota'),
(23, '245', 'South Dakota'),
(24, '245', 'Illinois'),
(25, '245', 'West Virginia'),
(26, '245', 'Virginia'),
(27, '245', 'California'),
(28, '245', 'Wyoming'),
(29, '245', 'Texas'),
(31, '245', 'Florida'),
(32, 'Nep', 'Bagmati'),
(33, 'Uni', 'North Dakota'),
(34, 'Uni', 'South Carolina'),
(35, 'Uni', 'South Carolina'),
(36, 'Uni', 'South Carolina'),
(37, 'Uni', 'South Carolina');

-- --------------------------------------------------------

--
-- Table structure for table `recent`
--

CREATE TABLE `recent` (
  `id` bigint(20) NOT NULL,
  `u_id` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `recent`
--

INSERT INTO `recent` (`id`, `u_id`) VALUES
(48, '4'),
(51, '5'),
(93, 'undefined'),
(95, '17'),
(97, '18'),
(101, '20'),
(132, '21'),
(134, '2'),
(137, '24'),
(138, '25'),
(139, '23'),
(140, '19'),
(141, '3'),
(142, '22'),
(143, '26'),
(144, '27'),
(145, '28'),
(146, '29'),
(147, '30'),
(148, '31'),
(149, '32'),
(150, '33'),
(151, '34'),
(152, '35'),
(153, '36'),
(154, '37'),
(155, '38'),
(156, '39'),
(157, '40'),
(158, '41'),
(159, '42'),
(160, '43'),
(161, '44');

-- --------------------------------------------------------

--
-- Table structure for table `rep`
--

CREATE TABLE `rep` (
  `id` int(11) NOT NULL,
  `gid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `role` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `title` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `mname` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `lname` varchar(70) COLLATE utf8_unicode_ci NOT NULL,
  `gen` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `adate` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT curdate(),
  `atime` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT time_format(curtime(),'%h:%i %p')
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `school`
--

CREATE TABLE `school` (
  `id` smallint(6) NOT NULL,
  `gid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `type` char(1) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `loc` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `frmonth` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `fryear` char(4) COLLATE utf8_unicode_ci NOT NULL,
  `tomonth` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `toyear` char(4) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `school`
--

INSERT INTO `school` (`id`, `gid`, `type`, `name`, `loc`, `frmonth`, `fryear`, `tomonth`, `toyear`) VALUES
(1, '3', 'H', 'Kathmandu Model Higher Secondary School', '22', '5', '2013', '9', '2016');

-- --------------------------------------------------------

--
-- Table structure for table `stcourse`
--

CREATE TABLE `stcourse` (
  `id` smallint(5) NOT NULL,
  `stid` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `course` varchar(5) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `stcourse`
--

INSERT INTO `stcourse` (`id`, `stid`, `course`) VALUES
(7, '516324', '1'),
(13, '124458', '74'),
(15, '121121', '57'),
(18, '1455777', '1'),
(22, '1224457', '1'),
(23, '127591', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `docs`
--
ALTER TABLE `docs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `enrolled`
--
ALTER TABLE `enrolled`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `extras`
--
ALTER TABLE `extras`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recent`
--
ALTER TABLE `recent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rep`
--
ALTER TABLE `rep`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `school`
--
ALTER TABLE `school`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stcourse`
--
ALTER TABLE `stcourse`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `countries`
--
ALTER TABLE `countries`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=364;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `docs`
--
ALTER TABLE `docs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `enrolled`
--
ALTER TABLE `enrolled`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `extras`
--
ALTER TABLE `extras`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `family`
--
ALTER TABLE `family`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `recent`
--
ALTER TABLE `recent`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=162;

--
-- AUTO_INCREMENT for table `rep`
--
ALTER TABLE `rep`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `school`
--
ALTER TABLE `school`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `stcourse`
--
ALTER TABLE `stcourse`
  MODIFY `id` smallint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
