CREATE TABLE Posts (
    ID varchar(10) NOT NULL PRIMARY KEY,
    Title varchar(100) NOT NULL UNIQUE,
    DatePosted timestamp,
    Path varchar(50)
);

CREATE TABLE Tags (
    Post_ID varchar(10) NOT NULL,
    Tag varchar(20) NOT NULL,
    PRIMARY KEY (Post_ID, Tag),
    FOREIGN KEY (Post_ID) REFERENCES Posts(ID)
);

CREATE TABLE Assets (
    Post_ID varchar(10) NOT NULL,
    Path varchar(50) NOT NULL,
    PRIMARY KEY (Post_ID, Path),
    FOREIGN KEY(Post_ID) REFERENCES Posts(ID)
);
