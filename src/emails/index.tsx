import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface SampleEmailProps {
  name: string;
  message: string;
}

export const SampleEmail = ({ name, message }: SampleEmailProps) => {
  const previewText = `Read ${name}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={`data:image/png;base64,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`}
                width='620'
                height='231'
                alt='Airbnb'
              />
            </Section>
            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>Here is what {name} wrote</Text>
                <Text style={review}>{message}</Text>
                <Text style={paragraph}>
                  Now that the review period is over, we’ve posted {name}
                  ’s review to your Airbnb profile.
                </Text>
                <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                  While it’s too late to write a review of your own, you can
                  send your feedback to {name} using your Airbnb message thread.
                </Text>

                <Button style={button} href='https://airbnb.com/'>
                  Send My Feedback
                </Button>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Row>
                <Text style={{ ...paragraph, fontWeight: '700' }}>
                  Common questions
                </Text>
                <Text>
                  <Link href='https://airbnb.com/help/article/13' style={link}>
                    How do reviews work?
                  </Link>
                </Text>
                <Text>
                  <Link
                    href='https://airbnb.com/help/article/1257'
                    style={link}
                  >
                    How do star ratings work?
                  </Link>
                </Text>
                <Text>
                  <Link href='https://airbnb.com/help/article/995' style={link}>
                    Can I leave a review after 14 days?
                  </Link>
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                  Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
                </Text>
                <Link href='https://airbnb.com' style={reportLink}>
                  Report unsafe behavior
                </Link>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default SampleEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};

const button = {
  backgroundColor: '#ff5a5f',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '18px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '0 19px',
};

const link = {
  ...paragraph,
  color: '#ff5a5f',
  display: 'block',
};

const reportLink = {
  fontSize: '14px',
  color: '#9ca299',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
};
