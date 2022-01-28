-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-01-2022 a las 09:44:23
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_calculadora_naturgy`
--
CREATE DATATABLE `bd_calculadora_naturgy`;
USE `bd_calculadora_naturgy`;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compromiso`
--

DROP TABLE IF EXISTS `compromiso`;
CREATE TABLE IF NOT EXISTS `compromiso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `compromiso`
--

INSERT INTO `compromiso` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(1, 0.047561, 0.054542, 0.1452, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `digitalgas`
--

DROP TABLE IF EXISTS `digitalgas`;
CREATE TABLE IF NOT EXISTS `digitalgas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `RL1TF` double NOT NULL,
  `RL1TV` double NOT NULL,
  `RL2TF` double NOT NULL,
  `RL2TV` double NOT NULL,
  `RL3TF` double NOT NULL,
  `RL3TV` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `digitalgas`
--

INSERT INTO `digitalgas` (`id`, `RL1TF`, `RL1TV`, `RL2TF`, `RL2TV`, `RL3TF`, `RL3TV`, `activo`, `f_ini`, `f_fin`) VALUES
(9, 0.2034, 0.1104, 0.379, 0.1037, 0.7659, 0.1013, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `endesa`
--

DROP TABLE IF EXISTS `endesa`;
CREATE TABLE IF NOT EXISTS `endesa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `endesa`
--

INSERT INTO `endesa` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(4, 0.09655273, 0.02237503, 0.198978, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `holaluz`
--

DROP TABLE IF EXISTS `holaluz`;
CREATE TABLE IF NOT EXISTS `holaluz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `holaluz`
--

INSERT INTO `holaluz` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(7, 0.076599, 0.003448, 0.32, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `iberdrola`
--

DROP TABLE IF EXISTS `iberdrola`;
CREATE TABLE IF NOT EXISTS `iberdrola` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `iberdrola`
--

INSERT INTO `iberdrola` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(5, 0.08893151, 0.07999, 0.25673, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nocheluz`
--

DROP TABLE IF EXISTS `nocheluz`;
CREATE TABLE IF NOT EXISTS `nocheluz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `TerminoDeEnergia2` double NOT NULL,
  `TerminoDeEnergia3` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `nocheluz`
--

INSERT INTO `nocheluz` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `TerminoDeEnergia2`, `TerminoDeEnergia3`, `activo`, `f_ini`, `f_fin`) VALUES
(3, 0.087627, 0.014475, 0.273, 0.1823, 0.1009, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `porusogas`
--

DROP TABLE IF EXISTS `porusogas`;
CREATE TABLE IF NOT EXISTS `porusogas` (
  `RL1TF` double NOT NULL,
  `RL1TV` double NOT NULL,
  `RL2TF` double NOT NULL,
  `RL2TV` double NOT NULL,
  `RL3TF` double NOT NULL,
  `RL3TV` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `porusogas`
--

INSERT INTO `porusogas` (`RL1TF`, `RL1TV`, `RL2TF`, `RL2TV`, `RL3TF`, `RL3TV`, `activo`, `f_ini`, `f_fin`, `id`) VALUES
(0.212, 0.1265, 0.379, 0.1192, 0.7658, 0.1182, 1, '2022-01-18', NULL, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `porusoluz`
--

DROP TABLE IF EXISTS `porusoluz`;
CREATE TABLE IF NOT EXISTS `porusoluz` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `porusoluz`
--

INSERT INTO `porusoluz` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(2, 0.087627, 0.014475, 0.171, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `repsol`
--

DROP TABLE IF EXISTS `repsol`;
CREATE TABLE IF NOT EXISTS `repsol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date NOT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `repsol`
--

INSERT INTO `repsol` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(6, 0.079746, 0.068984, 0.227734, 1, '2022-01-18', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `totalenergies`
--

DROP TABLE IF EXISTS `totalenergies`;
CREATE TABLE IF NOT EXISTS `totalenergies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `TerminoDePotencia1` double NOT NULL,
  `TerminoDePotencia2` double NOT NULL,
  `TerminoDeEnergia1` double NOT NULL,
  `activo` tinyint(4) NOT NULL DEFAULT '0',
  `f_ini` date DEFAULT NULL,
  `f_fin` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `totalenergies`
--

INSERT INTO `totalenergies` (`id`, `TerminoDePotencia1`, `TerminoDePotencia2`, `TerminoDeEnergia1`, `activo`, `f_ini`, `f_fin`) VALUES
(8, 0.081249, 0.081249, 0.27053, 1, '2022-01-18', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
