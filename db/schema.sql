/******************** SHOWCASE TABLE SCHEMA ************************/


-- Table Definition ----------------------------------------------

CREATE TABLE showcase (
    showcase_id SERIAL PRIMARY KEY,
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
    address character varying(250)
);

CREATE UNIQUE INDEX showcase_pkey ON showcase(showcase_id int4_ops);
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



/******************** FORM TABLE SCHEMA ************************/

-- Table Definition ----------------------------------------------

CREATE TABLE form (
    form_id integer PRIMARY KEY,
    attraction_id integer REFERENCES showcase(showcase_id),
    description character varying(250) NOT NULL,
    isopen boolean NOT NULL,
    suggestedduration integer NOT NULL,
    address character varying(250) NOT NULL
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX "ImproveForm_pkey" ON form(form_id int4_ops);
