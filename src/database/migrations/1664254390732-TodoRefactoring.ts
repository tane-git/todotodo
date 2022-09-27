import { MigrationInterface, QueryRunner } from 'typeorm';

export class TodoRefactoring1664254390732 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "Todo" RENAME COLUMN "label" TO "title" `,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "Todo" RENAME COLUMN "title" TO "label" `,
        );
    }
}
