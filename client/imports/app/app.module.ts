import { NgModule, ErrorHandler } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicModule,IonicErrorHandler } from 'ionic-angular';
import { ChatsPage } from '../pages/chats/chats';
import { ChatsOptionsComponent } from '../pages/chats/chats-options';
import { NewChatComponent } from '../pages/chats/new-chat';
import { LoginPage } from '../pages/login/login';
import { MessagesPage } from '.../pages/messages/messages';
import { MessagesAttachmentsComponent } from '../pages/messages/messages-attachments';
import { MessagesOptionsComponent } from '../pages/messages/messages-options';
import { NewLocationMessageComponent } from '../pages/messages/location-message';
import { ProfilePage } from '../pages/profile/profile';
import { VerificationPage } from '../pages/verification/verification';
import { PhoneService } from '../services/phone';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ChatsOptionsComponent,
    NewChatComponent,
    MessagesOptionsComponent,
    MessagesAttachmentsComponent,
    NewLocationMessageComponent
  ],
  imports : [
    IonicModule.forRoot(MyApp),
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDHp-tMaHabwJ1qaUJzEX6xscjnzssR6lA'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ChatsOptionsComponent,
    NewChatComponent,
    MessagesOptionsComponent,
    MessagesAttachmentsComponent,
    NewLocationMessageComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PhoneService
  ]
})
export class AppModule {}
