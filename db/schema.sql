-- Table Definition ----------------------------------------------

CREATE TABLE [IF NOT EXISTS] showcase (
    showcase_id SERIAL PRIMARY KEY,
    "attractionTitle" character varying(250) NOT NULL,
    city character varying(250) NOT NULL,
    reviews integer NOT NULL,
    "attractionRank" integer NOT NULL,
    "totalRankings" integer NOT NULL,
    ratio integer NOT NULL,
    "attractionType" character varying(250) NOT NULL,
    "travelersChoiceAward" boolean NOT NULL,
    "likedStatus" boolean NOT NULL,
    "ticketPrice" integer NOT NULL,
    "averageRating" integer NOT NULL,
    description character varying(250) NOT NULL,
    "isOpen" boolean NOT NULL,
    "suggestedDuration" integer NOT NULL,
    address character varying(250) NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX showcase_pkey ON showcase(showcase_id int4_ops);


-- Table Definition ----------------------------------------------

CREATE TABLE pictures (
    picture_id SERIAL PRIMARY KEY,
    pic character varying(250) NOT NULL,
    showcase_id integer REFERENCES showcase(showcase_id)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX pictures_pkey ON pictures(picture_id int4_ops);
