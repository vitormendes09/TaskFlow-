import { User } from "../src/entities/User";
import { IUserRepository } from "../src/Interfaces/IUserRepository";
import { UserUseCase } from "../src/use-case/UserUseCase";

describe("Registra usuario", () => {
    test("Registrar usuario pela primeira vez sem erro", async () => {
        // arrange
        const mockRepo: IUserRepository = {
            createUser: async function (user: User): Promise<User> {
                return { name: 'BlaBLaBla' } as unknown as User;
            },
            findById: async function (id: number): Promise<User | null> { return null },
            findAll: async function (): Promise<User[]> { return [] as User[]},
           
            delete: async function (id: number): Promise<void> {}
        }
        const sut = new UserUseCase(mockRepo);
        const alguma_coisa_esperada = { name: 'BlaBLaBla' } as unknown as User;

        // act
        const resultado = await sut.createUser( {} as User);

        // assert
        expect(resultado).toEqual(alguma_coisa_esperada);
    });

    test("Registrar o mesmo usuario duas vezes e receber um erro", () => {
        // arrange

        // act

        // assert
        expect(2).toBe(2);
    });
})