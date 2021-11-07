const db = require('../../config/db/database');

module.exports = function () {

    this.getAll = async () => {
        try {
            const invoice = await db.query(`SELECT * FROM dbo."HoaDon"`);
            return invoice.rows;
        } catch (error) {
            console.log(error);
        }
    }

    this.addInvoice = async (invoice) => {
        try {
            await db.query(`INSERT INTO dbo."HoaDon" ("MaKH", "NgayLap") VALUES(${invoice.MaKH}, current_timestamp)`);
        } catch (error) {
            console.log(error);
        }
    }

    this.getMonth = async (month) => {
        try {
            const invoices = await db.query(`SELECT * FROM dbo."HoaDon" WHERE extract(month from "NgayLap") = ${month};`);
            return invoices.rows;
        } catch (error) {
            console.log(error);
        }
    }

    this.addDetail = async (detail) => {
        try {
            await db.query(
                `INSERT INTO dbo."CT_HoaDon"("MaHD", "MaSP", "SoLuong", "GiaGiam") 
                VALUES (${detail.MaHD}, ${detail.MaSP}, ${detail.SoLuong}, ${detail.GiaGiam})`
            )
        }
        catch (err) {
            console.log(err);
        }
    }
}