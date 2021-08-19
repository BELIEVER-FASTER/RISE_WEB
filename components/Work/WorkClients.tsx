import { clientsData } from 'utils/clientData';
import ClientLogo from './ClientLogo';
import { WorkClientsContainer } from './styles';

export default function WorkClients(): JSX.Element {
  return (
    <WorkClientsContainer>
      <h3>Our Clients</h3>
      <ul>
        {[...clientsData, ...clientsData, ...clientsData, ...clientsData].map(client => (
          <li key={client.id} className="client_icon">
            <ClientLogo src={client.src} name={client.name} />
          </li>
        ))}
      </ul>
      <p>And More Than 77 Brands</p>
    </WorkClientsContainer>
  );
}
