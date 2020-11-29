/* eslint-disable no-console */
import React from 'react';
import { ListaComponentizada } from '../../components/partials/Lista/ListaComponent';
import { Template } from '../../components/partials/template';
import UserPhoto from '../../assets/media/Person.jpg';

export const Jogos = () => {
    return (
        <Template>
            <div
                style={{
                    display: 'flex',
                }}
            >
                <div
                    style={{
                        marginLeft: '39%',
                        fontWeight: '500',
                        fontFamily: 'Roboto',
                    }}
                >
                    <p>Tempo Estimado de Espera</p>
                </div>
                <div
                    style={{
                        marginRight: '15%',
                        marginLeft: '12%',
                        fontWeight: '500',
                        fontFamily: 'Roboto',
                    }}
                >
                    <p>Nº de Pessoas na Fila</p>
                </div>
            </div>
            <ListaComponentizada
                photo={UserPhoto}
                nome="Você"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
            <ListaComponentizada
                photo={UserPhoto}
                nome="Teste"
                fila="Teste"
                tempo="Teste"
            />
        </Template>
    );
};
