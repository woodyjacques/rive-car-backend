import { Column, DeleteDateColumn, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class userrivecar {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  name: string;
  @Column({ unique: true, nullable: false })
  email: string;
  @Column({ length: 500 })
  sucursal: string;
  @Column({ nullable: false })
  password: string;
  @Column()
  isVerified: boolean;
}
