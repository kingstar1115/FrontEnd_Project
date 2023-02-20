import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MailService } from 'src/mail/mail.service';
import { Contact } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';


@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact) private readonly contactRepository: Repository<Contact>,
    private readonly mailService: MailService,
  ) { }
  create(createContactDto: CreateContactDto) {
    const newContact = this.contactRepository.create(createContactDto);
    this.contactRepository.save(newContact);
    return 'This action adds a new contact';
  }

  async findAll() {
    const contacts = await this.contactRepository.find();
    const contact = await this.contactRepository.findBy({
      lastname:'Steven',
    });
    console.log(contact);
    return contacts;
  }

  findOne(id: number) {
    return `This action returns a #${id} contact`;
  }

  update(id: number, updateContactDto: UpdateContactDto) {
    return `This action updates a #${id} contact`;
  }

  remove(id: number) {
    return `This action removes a #${id} contact`;
  }
}
