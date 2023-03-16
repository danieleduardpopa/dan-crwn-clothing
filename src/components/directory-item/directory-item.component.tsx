import { useNavigate } from 'react-router-dom';

import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles';

type DirectoryItemProps = {
  category: {
    imageUrl: string;
    title: string;
    route: string;
  }
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const navigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={navigateHandler}>
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    )
}

export default DirectoryItem;