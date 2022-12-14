import { MigrationInterface, QueryRunner } from 'typeorm';

export class addTodoTable1664606085168 implements MigrationInterface {
    name = 'addTodoTable1664606085168';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "Todo" ("id" SERIAL NOT NULL, "label" character varying NOT NULL, "isUrgent" boolean NOT NULL DEFAULT false, "isImportant" boolean NOT NULL DEFAULT true, "isComplete" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_7c134d062947a53f89064491e63" PRIMARY KEY ("id"))`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Todo"`);
    }
}
