import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
  chevronForwardOutline ,
  homeOutline,
  homeSharp,
  logInOutline,
  logInSharp,
  personAddOutline,
  personSharp,
  cafeOutline,
  cafeSharp,
  cartOutline,
  cartSharp,
  cashOutline,
  cashSharp,
  callOutline,
  callSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'หน้าหลัก',
    url: '/page/Inbox',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'เข้าสู่ระบบ',
    url: '/page/Outbox',
    iosIcon: logInOutline,
    mdIcon: logInSharp
  },
  {
    title: 'ลงทะเบียน',
    url: '/page/Favorites',
    iosIcon: personAddOutline,
    mdIcon: personSharp
  },
  {
    title: 'สินค้า',
    url: '/page/Archived',
    iosIcon: cafeOutline,
    mdIcon: cafeSharp
  },
  {
    title: 'ตระก้าสินค้า',
    url: '/page/Trash',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'ชำระเงิน',
    url: '/page/Spam',
    iosIcon: cashOutline,
    mdIcon: cashSharp
  },
  {
    title: 'ติดต่อเรา',
    url: '/page/Spam',
    iosIcon: callOutline,
    mdIcon: callSharp
  }
];

const labels = ['Sumsung', 'Vivo', 'Apple', 'Huawei', 'Rrealme', 'Oppo'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="end" icon={chevronForwardOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
