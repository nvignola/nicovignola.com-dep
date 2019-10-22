import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page" />
    <Container>
      <h3>About me what?</h3>
      <p>
        A very long time ago, a future rockstar tech guy was born... was not me but{' '}
        <a
          href="https://twitter.com/getify"
          title="go to Kyle Simposon twitter profile"
        >
          Kyle Simpson
        </a>
        ... and after some other time, I managed to arrive in this world and my
        story started from that point in history.
      </p>
      <p>
        I was born in a city called Bari in the south of Italy in a region called
        Puglia. When I was 8 years old, my parents and I decided to move to
        Rimini from Gravina in Puglia.  We moved not because there was no work for them, but due to the slow internet connection there. 
        
      </p>
      <p>
        If you have managed to read until this line, well done, you are very
        interested in my life. Thank you for that, but I will stop talking about it.
        I am sorry but my biography will be out soon,{' '} 
        <a
          href="https://www.linkedin.com/in/nicolantonio-vignola/"
          target="_blank"
          title="Nico Vignola LinkedIn profile"
        >
          let's keep in touch.
        </a>
      </p>
      <p>
        Let us stay focussed on what matters. My real name is Nicolantonio but if
        you can't deal with it, Nico is more than fine.
      </p>
      <h3>About this blog what?</h3>
      <p>
        Do you know about{' '}
        <a
          href="https://www.troyhunt.com/the-ghost-who-codes-how-anonymity-is/"
          target="_blank"
          title="The Ghost Who Code article"
        >
          the ghost who code
        </a>
        ? Well, that answers the why of this blog. I strongly suggest
        reading that article... strongly.
      </p>
      <p>
        I wasn't aware of coding ghosts and mainly I didn't know that I was one
        of them. Is not only about the career but is more about giving back to
        the community. I don't know too much, I don't have the truth in my hands
        but I'll try to share what I know and especially what I don't know.
      </p>
      <p>
        This blog is also for me, my selfish, healthy part. Since I can't retain
        much information in my head I will put it here.
      </p>
      <p>So that is it, you can go back to whatever brought you here.</p>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
