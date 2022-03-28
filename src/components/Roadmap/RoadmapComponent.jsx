import React from "react";
import "./RoadmapStyle.scss";
function Roadmap() {
  return (
    <div class="forms">
      <div class="form_followers">
        <div class="rules">
          <h3>Competition Rules:</h3>

          <p>
            1. Followers who enter the competition will only be able to
            participate for that week. They will not be able to participate in
            the following weeks.
          </p>
          <p>
            2. Each week, the shiller count will be set to Zero to ensure that
            everyone shilling during that specific week will have an equal
            chance to win. Remember, each invite is one extra chance to win.
          </p>
          <p>
            3. There will be a special NFT prize at the end of week 3 ,
            Cybernator-0182, for all shillers that have participated over the
            course of the event (Yes, you heard us, all shillers counts from
            week 1 - week 3 will be taken into consideration).
          </p>

          <p class="note">
            Note: All winners will be chosen completely at random
          </p>
        </div>
      </div>

      <div class="form_shillers">
        <div className="hand_info_border">
          <div className="hand_info_container">
            <div class="hand_title_element">
              <h3>Colour Key:</h3>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
