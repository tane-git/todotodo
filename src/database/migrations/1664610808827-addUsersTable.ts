import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class addUsersTable1664610808827 implements MigrationInterface {
    tableName: string;

    constructor() {
        this.tableName = 'Users';
    }

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: 'id',
                        isPrimary: true,
                        type: 'bigint',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable(this.tableName);
    }
}
