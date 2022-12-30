import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @Length(5, 240)
  content: string | undefined;

  @IsNotEmpty()
  category: string | undefined;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string | undefined;
}
