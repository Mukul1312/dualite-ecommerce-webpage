/* eslint-disable react/prop-types */
import "./Card.css";
const Card = ({
  name = "Breed Dry Dog Food",
  rating = "4.0",
  price = "$100",
  reviewCnt = "35",
  img = "https://i.imgur.com/UYrdDFI.jpeg",
}) => {
  return (
    <div className="parent-card">
      <div className="cart-1-23323 pos-abs" id="id-28125282">
        <div className="frame-574-1-20562 pos-abs" id="id-28125289">
          <div className="breed-dry-dog-f-1-138130 pos-abs" id="id-28125290">
            <span className="breed-dry-dog-f-1-138130-0">{name}</span>
          </div>
          <div className="frame-573-1-208680 pos-abs" id="id-28125291">
            <div className="c-40-1-288510 pos-abs" id="id-28125294">
              <span className="c-40-1-288510-0">{rating}</span>
            </div>
            <div className="frame-567-1-517760 pos-abs" id="id-28125292">
              <div className="c-100-1-472560 pos-abs" id="id-28125293">
                <span className="c-100-1-472560-0">{price}</span>
              </div>
            </div>
            <div className="vector-1-223160 pos-abs" id="id-28125295">
              <div
                className="nodeBg-28125295 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                id="id-bg-28125295"
              ></div>
            </div>
            <div className="frame-566-1-182655 pos-abs" id="id-28125296">
              <div className="c-35-1-45968 pos-abs" id="id-28125298">
                <span className="c-35-1-45968-0">({reviewCnt})</span>
              </div>
              <div className="three-star-1-180301 pos-abs" id="id-28125297">
                <div className="vector-1-10614 pos-abs" id="id-I28125297_612409">
                  <div
                    className="nodeBg-I28125297_612409 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125297_612409"
                  ></div>
                </div>
                <div className="vector-2-232254 pos-abs" id="id-I28125297_612410">
                  <div
                    className="nodeBg-I28125297_612410 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125297_612410"
                  ></div>
                </div>
                <div className="vector-3-175527 pos-abs" id="id-I28125297_612411">
                  <div
                    className="nodeBg-I28125297_612411 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125297_612411"
                  ></div>
                </div>
                <div className="vector-4-107595 pos-abs" id="id-I28125297_612412">
                  <div
                    className="nodeBg-I28125297_612412 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125297_612412"
                  ></div>
                </div>
                <div className="vector-5-411039 pos-abs" id="id-I28125297_612413">
                  <div
                    className="nodeBg-I28125297_612413 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125297_612413"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-1-351848 pos-abs" id="id-28125283">
        <div className="frame-604-1-233585 pos-abs" id="id-28125287">
          <div className="c-71rdoexxtrl-1-1-31556 pos-abs" id="id-28125288">
            <div
              className="nodeBg-28125288 pos-abs image-div bg-no-repeat  bg-crop"
              id="id-bg-28125288"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              {" "}
            </div>
          </div>
        </div>
        <div className="frame-568-1-16248 pos-abs" id="id-28125284">
          <div className="fill-heart-1-460918 pos-abs" id="id-28125285">
            <div className="ellipse-12-1-251419 pos-abs" id="id-I28125285_55346"></div>
            <div className="heart-small-1-7077 pos-abs" id="id-I28125285_55380">
              <div className="vector-1-15484 pos-abs" id="id-I28125285_55380_55376">
                <div
                  className="nodeBg-I28125285_55380_55376 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                  id="id-bg-I28125285_55380_55376"
                ></div>
              </div>
            </div>
          </div>
          <div className="fill-eye-1-396000 pos-abs" id="id-28125286">
            <div className="ellipse-13-1-238896 pos-abs" id="id-I28125286_55354"></div>
            <div className="quick-view-1-165375 pos-abs" id="id-I28125286_55355">
              <div className="group-1-167024 pos-abs" id="id-I28125286_55355_55350">
                <div className="vector-1-708480 pos-abs" id="id-I28125286_55355_55351">
                  <div
                    className="nodeBg-I28125286_55355_55351 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125286_55355_55351"
                  ></div>
                </div>
                <div className="vector-2-7161 pos-abs" id="id-I28125286_55355_55352">
                  <div
                    className="nodeBg-I28125286_55355_55352 pos-abs pos-init fill-parent bg-contain bg-no-repeat image-div"
                    id="id-bg-I28125286_55355_55352"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
