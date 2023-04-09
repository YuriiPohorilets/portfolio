import { Title } from 'shared/Title';
import { SocialList } from 'components/SocialList/SocialList';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const Contacts = () => {
  return (
    <>
      <Title>You can find me</Title>
      <ContactsList />
      <SocialList />
    </>
  );
};
