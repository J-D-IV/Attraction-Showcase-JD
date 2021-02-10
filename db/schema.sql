/******************** SHOWCASE TABLE SCHEMA ************************/


-- Table Definition ----------------------------------------------

CREATE TABLE showcase (
    showcase_id integer DEFAULT nextval('untitled_table_showcase_id_seq'::regclass) PRIMARY KEY,
    "attractionTitle" character varying(250),
    city character varying(250),
    reviews integer,
    "attractionRank" integer,
    "totalRankings" integer,
    ratio integer,
    "attractionType" character varying(250),
    "travelersChoiceAward" boolean,
    "likedStatus" boolean,
    "ticketPrice" integer,
    "avgReviews" integer,
    description character varying(250),
    "isOpen" boolean,
    "suggestedDuration" character varying(250),
    column16 text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX showcase_pkey ON showcase(showcase_id int4_ops);



/******************** PICTURE TABLE SCHEMA ************************/

-- Table Definition ----------------------------------------------

CREATE TABLE pictures (
    picture_id SERIAL PRIMARY KEY,
    pic character varying(250) NOT NULL,
    showcase_id integer NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX pictures_pkey ON pictures(picture_id int4_ops);
CREATE INDEX showcase_fkey ON pictures(showcase_id int4_ops);
