import React from "react";
import tweet1 from "../images/tweet1.png";
import tweet2 from "../images/tweet2.png";
import tweet3 from "../images/tweet3.png";
import lg from "../images/lauren-greenfield.png";
import dy from "../images/darryl-yap.png";

function A5() {
	return (
		<>
			<p>
				The effect of the billboard greeting differs depending on the receiver’s
				political stance. Those who sided with Leni’s campaign found the
				billboard to be ludicrous because of the grammatical error found on the
				billboard. Kakampinks took to Twitter to magnify this careless error and
				saw this as an opportunity to ridicule the former First Lady. Some
				tweets even mentioned her graft cases in their “greetings.”
			</p>
			<div className="image-container">
				<img src={tweet1} alt="" />
				<img src={tweet2} alt="" />
				<img src={tweet3} alt="" />
			</div>
			<p>
				Moreover, a prominent individual also reacted to the electronic
				billboard. She is Lauren Greenfield, the writer and director of the
				documentary, “The Kingmaker.” Lauren went to Twitter to express her
				frustration as the image used in the billboard is owned by the
				documentary she produced. She claimed that the image was stolen from her
				and that the billboard violated copyright laws.
			</p>
			<img src={lg} alt="" />
			<p>
				On the other hand, Marcos’ supporters did not, in any way, appreciate
				the billboard greeting. Darryl Yap, a known staunch supporter of the
				Marcoses, posted on Facebook his opinion about the controversial
				billboard. He claimed that the billboard was put up by the opposition
				and that this is their tactic to portray Marcos’ supporters as ignorant.
				He tried to solidify his theory by pointing out that the image used was
				from “The Kingmaker,” an anti-Marcos documentary.
			</p>
			<img src={dy} alt="" />
			<p>
				It’s hard to tell who really benefited from this billboard greeting. On
				social media, we can clearly see that this did not favor the Marcoses.
				But come to think of it, do you think the people who walked along EDSA
				and saw the billboard even noticed these details? Did the billboard
				further solidify Imelda’s matriarch image?
			</p>
		</>
	);
}

export default A5;
