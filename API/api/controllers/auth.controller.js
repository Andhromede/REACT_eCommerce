// const bcrypt = require('bcrypt');
const UtilisateurService = require('../services/utilisateur.service');
// const MailerService = require('../services/mailer.service');
// const appConfig = require("../configs/app.config");
// const jwt = require('jsonwebtoken');




class AuthController {

    /***************************** RECHERCHE L'USER *****************************/
    getUtilisateur = async (email) => {
        const utilisateurService = new UtilisateurService();
        const utilisateurs = await utilisateurService.getAll({ where: `login = "${email}"` });
        return utilisateurs.length === 1 ? utilisateurs.pop() : null;
    }


    /***************************** LOGIN *****************************/
    // login = async (params) => {
    //     let utilisateur = await this.getUtilisateur(params.login);

    //     if (utilisateur) {
    //         try {
    //             const passwordHashed = `${appConfig.HASH_PREFIX + utilisateur.password}`;
    //             const passwordEnteredByUtilisateur = params.password;
    //             let result = await bcrypt.compare(passwordEnteredByUtilisateur, passwordHashed);

    //             if (result) {
    //                 const token = jwt.sign({id: utilisateur.id_utilisateur, login: utilisateur.login, role: utilisateur.id_role}, appConfig.JWT_SECRET, { expiresIn: '1d' });
    //                 return { email: utilisateur.login, role: utilisateur.id_role, token, result: true, message: "Vous êtes bien authentifié !", id:utilisateur.id_utilisateur };

    //             } else {
    //                 console.error("401");
    //                 return { result: false, message: "Erreur de mots de passe." };
    //             }

    //         }catch (error) {
    //             console.error(error);
    //             return error;
    //         }
    //     } else {
    //         console.log("404");
    //         return { result: false, message: "Aucun utilisateur trouvé !" };
    //     }
    // }


    /***************************** INSCRIPTION *****************************/
    inscription = async (params) => {
        let utilisateur = await this.getUtilisateur(params.login);

        if (utilisateur) {
            return { message: "Cet adresse mail existe déjà !" };

        }else {
            try {
                // let newPassword = await bcrypt.hash(params.password, 10);
                // newPassword = newPassword.slice(7, newPassword.length);
                // params.password = newPassword;

                const utilisateurService = new UtilisateurService();
                await utilisateurService.insert(params);
                return { status: 200 };

            } catch (error) {
                return { error };
            }
        }
    }

    // check = async (params) => {
    //     const auth = params.cookies.auth;
    //     if (auth) {
    //         const result = jwt.verify(auth, appConfig.JWT_SECRET);
    //         if (result) {
    //             // console.log(result);
    //             return { result:true, role:result.role, id:result.id }
    //         }
    //     }
    //     return { result: false, role:0, id:0 }
    // }





    /***************************** POUR GENERER UN HASH DE MDP *****************************/
    // hash = async(password) => {
    //     const saltRounds = 10;

    //     bcrypt.genSalt(saltRounds, function (err, salt) {
    //         if (err) {
    //             throw err
    //         } else {
    //             bcrypt.hash(password, salt, function (err, hash) {
    //                 if (err) {
    //                     throw err
    //                 } else {
    //                     return (hash)
    //                     //$2b$10$JG8evo6/lnN.ZbSCWHufk.AUKjIRzdKEXHxvjoqXoWtSOpCdk4p3m
    //                 }
    //             })
    //         }
    //     })
    // }





}
module.exports = AuthController;
