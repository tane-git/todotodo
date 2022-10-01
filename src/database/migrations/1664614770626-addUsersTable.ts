import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUsersTable1664614770626 implements MigrationInterface {
    name = 'addUsersTable1664614770626';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "Users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }
}
