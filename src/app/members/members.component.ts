import { Component } from '@angular/core';
import { Member } from '../member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent {
  member: Member = {
    id: 1,
    name: '田中太郎',
  };
}
