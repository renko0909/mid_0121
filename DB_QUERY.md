CREATE TABLE `articles` (
    `id` int NOT NULL PRIMARY KEY,
    `title` varchar(255) NOT NULL,
    `content` text NOT NULL
);

INSERT INTO `articles` (`title`, `content`)VALUES (
    'Assignment', 'We are learning node.js...'
);