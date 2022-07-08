import React from "react";
import { ReadOnMediumSection } from "../components/ReadSection";

const ReadOnMedium = () => {
  return (
    <React.Fragment>
      <h1 className="  xl:mb-8 xl:text-5xl mt-48 xl:ml-96 text-gray-600">
        Read on Medium
      </h1>
      <div className="mx-auto">
        <ReadOnMediumSection
          date="jul 28, 2022"
          heading="Front-end Developer Demands today"
          time="2 mins read"
        />
        <ReadOnMediumSection
          date="jul 28, 2022"
          heading="Front-end Developer Demands today"
          time="2 mins read"
        />
        <ReadOnMediumSection
          date="jul 28, 2022"
          heading="Front-end Developer Demands today"
          time="2 mins read"
        />
      </div>
    </React.Fragment>
  );
};

export default ReadOnMedium;
