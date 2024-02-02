import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import config from '../../tailwind.config';
import { Contact, ContactEmailProps, ContactServices } from '../types/contact';
import emails from '../i18n/emails.json';
import { FormSummary } from './components/form-summary';
import logo from '../../public/images/email/logo.png';
import linkedin from '../../public/images/email/linkedin.png';
import youtube from '../../public/images/email/youtube.png';
import facebook from '../../public/images/email/facebook.png';
import instagram from '../../public/images/email/instagram.png';

const baseUrl = process.env.BASE_URL;

export const ClientEmail = ({ props = previewProps }) => {
  const {
    language,
    contactData: { data },
  } = props;
  const t = emails[language]['client-email'];

  const previewText = `LEA 4 International: ${data.name} ${t.preview}`;

  return (
    <Html>
      <Head>
        <title>{previewText}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind config={config}>
        <Body className='mx-auto' style={bodyStyle}>
          <Section className='bg-basics-white py-8'>
            <Container className='max-w-[490px]'>
              <Link href='https://www.lea4int.com'>
                <Img
                  src={`${baseUrl}/_next/image?url=${encodeURIComponent(
                    logo.src
                  )}&w=256&q=100`}
                  width={132}
                  height={50}
                  alt='LEA4International'
                />
              </Link>
              <Hr className='my-6 border-europe' />
              <Text className='text-desktop-b-2xl text-europe-dark'>
                {data.name}, {t.title}
              </Text>
              <Text className='mt-4 text-desktop-b-md text-europe'>
                {t.description}
              </Text>
              <Container className='bg-basics-gray px-3 py-2'>
                <FormSummary {...props} />
              </Container>
              <Container className='mt-6'>
                <Text
                  className='m-0 text-desktop-b-md text-europe'
                  dangerouslySetInnerHTML={{ __html: t['working-on'] }}
                />
              </Container>
            </Container>
          </Section>
          <Section className='bg-europe py-8'>
            <Container className='mx-auto max-w-[490px]'>
              <Row className='m-auto'>
                <Column width='50%' />
                <Column className='pr-2'>
                  <Link href={Contact.instagram}>
                    <Img
                      src={`${baseUrl}/_next/image?url=${encodeURIComponent(
                        instagram.src
                      )}&w=256&q=100`}
                      width={24}
                      height={24}
                      alt='Instagram'
                    />
                  </Link>
                </Column>
                <Column className='pr-2'>
                  <Link href={Contact.linkedin}>
                    <Img
                      src={`${baseUrl}/_next/image?url=${encodeURIComponent(
                        linkedin.src
                      )}&w=256&q=100`}
                      width={24}
                      height={24}
                      alt='LinkedIn'
                    />
                  </Link>
                </Column>
                <Column className='pr-2'>
                  <Link href={Contact.facebook}>
                    <Img
                      src={`${baseUrl}/_next/image?url=${encodeURIComponent(
                        facebook.src
                      )}&w=256&q=100`}
                      width={24}
                      height={24}
                      alt='Facebook'
                    />
                  </Link>
                </Column>
                <Column className='pr-2'>
                  <Link href={Contact.youtube}>
                    <Img
                      src={`${baseUrl}/_next/image?url=${encodeURIComponent(
                        youtube.src
                      )}&w=256&q=100`}
                      width={24}
                      height={24}
                      alt='Youtube'
                    />
                  </Link>
                </Column>
                <Column width='50%' />
              </Row>
              <Row>
                <Column align='center'>
                  <Text className='m-0 mt-6 text-desktop-b-xs text-basics-white'>
                    Copyright 2024 © LEA 4 International. All rights reserved
                  </Text>
                </Column>
              </Row>
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

const bodyStyle = {
  fontFamily: 'Ubuntu,Roboto,Oxygen-Sans,Cantarell,"Helvetica Neue",sans-serif',
};

const previewProps: ContactEmailProps = {
  language: 'en',
  contactData: {
    type: 'INDIVIDUAL',
    data: {
      name: 'Lucia',
      lastname: 'Soto',
      email: 'hola@test.com',
      phone: '654789125',
      nationality: 'Spanish',
      message: 'Helllow ',
      service: ContactServices.ERASMUS,
      terms: true,
    },
  },
};

export default ClientEmail;
