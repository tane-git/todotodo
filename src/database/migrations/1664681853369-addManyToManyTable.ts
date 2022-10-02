import { MigrationInterface, QueryRunner } from 'typeorm';

export class addManyToManyTable1664681853369 implements MigrationInterface {
    name = 'addManyToManyTable1664681853369';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "users_todos_todo" ("usersId" integer NOT NULL, "todoId" integer NOT NULL, CONSTRAINT "PK_bfc89e7272baa5729b4d7e21ba0" PRIMARY KEY ("usersId", "todoId"))`,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_5848844d45a4a7b2b550805864" ON "users_todos_todo" ("usersId") `,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_4865b2aea1f9903d80d3b91c91" ON "users_todos_todo" ("todoId") `,
        );
        await queryRunner.query(
            `ALTER TABLE "users_todos_todo" ADD CONSTRAINT "FK_5848844d45a4a7b2b5508058640" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "users_todos_todo" ADD CONSTRAINT "FK_4865b2aea1f9903d80d3b91c910" FOREIGN KEY ("todoId") REFERENCES "Todo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "users_todos_todo" DROP CONSTRAINT "FK_4865b2aea1f9903d80d3b91c910"`,
        );
        await queryRunner.query(
            `ALTER TABLE "users_todos_todo" DROP CONSTRAINT "FK_5848844d45a4a7b2b5508058640"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_4865b2aea1f9903d80d3b91c91"`,
        );
        await queryRunner.query(
            `DROP INDEX "public"."IDX_5848844d45a4a7b2b550805864"`,
        );
        await queryRunner.query(`DROP TABLE "users_todos_todo"`);
    }
}
