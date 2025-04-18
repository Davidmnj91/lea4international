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
  TailwindConfig,
  Text,
} from '@react-email/components';
import config from '../../tailwind.config';
import { Contact, ContactEmailProps, ContactServices } from '../types/contact';
import emails from '../messages/emails.json';
import { FormSummary } from './components/form-summary';

const baseUrl = process.env.BASE_URL;

export const AdminEmail = ({ props = previewProps }) => {
  const {
    language,
    contactData: { data },
  } = props;
  const t = emails[language]['admin-mail'];

  const previewText = `${data.name} ${t.preview}`;

  return (
    <Html>
      <Head>
        <title>{previewText}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind config={config as TailwindConfig}>
        <Body className='mx-auto' style={bodyStyle}>
          <Section className='bg-basics-white py-8'>
            <Container className='max-w-[490px]'>
              <Link href='https://www.lea4int.com'>
                <Img
                  src={`${baseUrl}/images/email/logo.png`}
                  width={132}
                  height={50}
                  alt='LEA4International'
                />
              </Link>
              <Hr className='my-6 border-europe' />
              <Text className='text-desktop-b-2xl text-europe-dark'>
                {data.name} {t.title}
              </Text>
              <Text className='my-4 text-desktop-b-md text-europe'>
                {t.description}
              </Text>
              <Container className='bg-basics-gray px-3 py-2'>
                <FormSummary {...props} />
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
                      src={`${baseUrl}/images/email/instagram.png`}
                      width={24}
                      height={24}
                      alt='Instagram'
                    />
                  </Link>
                </Column>
                <Column className='pr-2'>
                  <Link href={Contact.linkedin}>
                    <Img
                      src={`${baseUrl}/images/email/linkedin.png`}
                      width={24}
                      height={24}
                      alt='LinkedIn'
                    />
                  </Link>
                </Column>
                <Column className='pr-2'>
                  <Link href={Contact.facebook}>
                    <Img
                      src={`${baseUrl}/images/email/facebook.png`}
                      width={24}
                      height={24}
                      alt='Facebook'
                    />
                  </Link>
                </Column>
                <Column className='pr-2'>
                  <Link href={Contact.youtube}>
                    <Img
                      src={`${baseUrl}/images/email/youtube.png`}
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

export default AdminEmail;
