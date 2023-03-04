DROP TABLE IF EXISTS `users`;


CREATE TABLE `users` (
  `﻿guid` varchar(45) NOT NULL,
  `names` varchar(45) NOT NULL,
  `email` varchar(320) DEFAULT NULL,
  `fitness_goals` enum('Build Lean Muscle','Feel Stronger','Reduce Body Fat') DEFAULT 'Build Lean Muscle',
  `speak_to_trainer` tinyint(1) NOT NULL DEFAULT '0',
  `lenth_of_workout` varchar(45) DEFAULT NULL,
  `personal_trainer_before` tinyint(1) NOT NULL DEFAULT '0',
  `dietary_considerations` text,
  `other_dietary_considerations` text,
  `is_consistency` tinyint(1) DEFAULT NULL,
  `contact_number` varchar(20) DEFAULT NULL,
  `start_date` text,
  `submit_Date` text,
  `network_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`﻿guid`),
  UNIQUE KEY `﻿guid_UNIQUE` (`﻿guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

