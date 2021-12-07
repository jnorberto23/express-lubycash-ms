import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate
} from "typeorm";

import bcryptjs from 'bcryptjs'

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  cpf_number: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zipcode: string;

  @Column()
  current_balance: number;

  @Column()
  average_salary: number;

  @Column()
  status: string

  @Column()
  token: string;

  @CreateDateColumn({ name: "token_created_at" })
  token_created_at: Date;

  @CreateDateColumn({ name: "created_at" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updated_at: Date;
/*
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(){
      this.password = bcryptjs.hashSync(this.password, 8)
  }
  */
}

export default User;
