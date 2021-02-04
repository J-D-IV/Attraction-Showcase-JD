CREATE TABLE [IF NOT EXISTS] "public"."showcase" (
  "showcase_id" serial,
  "attractionTitle" VARCHAR ( 250 ) NOT NULL,
  "city" VARCHAR ( 250 ) NOT NULL,
  "reviews" INT NOT NULL,
  "attractionRank" INT NOT NULL,
  "totalRankings" INT NOT NULL,
  "ratio" INT NOT NULL,
  "attractionType" VARCHAR ( 250 ) NOT NULL,
  "travelersChoiceAward" BOOLEAN NOT NULL,
  "likedStatus" BOOLEAN NOT NULL,
  "ticketPrice" INT NOT NULL,
  "avgReviews" INT NOT NULL,
  "description" VARCHAR ( 250 ) NOT NULL,
  "isOpen" BOOLEAN NOT NULL,
  "suggestedDuration" INT NOT NULL,
  "address" VARCHAR ( 250 ) NOT NULL,
  PRIMARY KEY ("showcase_id")
);

CREATE TABLE "public"."pictures" (
  "picture_id" serial,
  "pic" VARCHAR ( 250 ) NOT NULL,
  "showcase_id" INT,
  PRIMARY KEY ("picture_id"),
  FOREIGN KEY ("showcase_id") REFERENCES "public"."showcase"("showcase_id")
);