import * as React from 'react';
import Box from '@mui/material/Box';
import {Button, Stack} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";

const Privacy =() => {
    return (
        <div className='background'>
            <Box style={{color:"black"}} sx={{ width: "100%",
                // marginTop: '10%',
                textAlign: 'center',
                padding: "24px 20px", // theme padding
                border: "1px solid rgba(0, 0, 0, 0.12)",
                // background: "#c6e5cd",
                borderRadius: 2 }}>

                <p style={dark}>PRIVACY POLICY</p>

                <p>Thank you for choosing to be part of our community at CliniFind.
                    We are Computer Science students at Northeastern University and
                    built this website as a part of the Web Development course.</p>

                <p>We understand that health is a very personal, private subject. We therefore are committed
                    to protecting the privacy and security of all visitors to our website. Our website privacy
                    policy will tell you what information we collect, how it is used and what your choices are.
                    Please read this policy carefully.</p>

                <p>We only collect and share information with your consent, to comply with laws,to
                    provide you with services, or to protect your rights.</p>

                <p>In general, any disclosure of clinical information requires a written consent
                    from you, or, if you are under the age of 18, a parent or guardian. Disclosures,
                    however, can occur without written consent in certain specific circumstances, such
                    as by judicial order or in a medical emergency.</p>
                <p>All health care providers must comply with these federal regulations, which means that
                    they must obtain formal permission to share information (including diagnosis, treatment,
                    and prognosis), even if you are a spouse, parent, or guardian of an adult participant.</p>

                <p>A participant provides permission by signing a release of information form. If a participant
                    has not signed a release, then clinical staff cannot share any information. Please note,
                    however, that you may share with clinicians any information that you think is important for
                    the participant’s treatment and recovery.</p>

                <p>Information posted on our sites is not intended to be medical advice and should not be
                    considered medical advice, nor is it intended to replace consultation with a qualified
                    physician or other health care provider.</p>

                <p>The purpose of this privacy notice is to explain to you in the clearest way possible what
                    information we collect, how we use it, and what rights you have in relation to it. If there are any
                    terms in this privacy notice that you do not agree with, please discontinue use of our Trial Services
                    immediately.</p>


            </Box>
        </div>
    );
}

export default Privacy;

