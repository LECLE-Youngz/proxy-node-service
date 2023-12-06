import { Controller, Get, Post, Body, BadRequestException, Param } from "@nestjs/common";
import { request } from "gaxios";

@Controller()
export class AppController {
    @Get()
    async ping() {
        return "Server is running";
    }

    @Post("/wallets")
    async gateWayWallet(@Body() body: any) {
        try {
            const response = await request({
                url: `${process.env.GATEWAY_URL}/wallets`,
                method: "POST",
                data: body,
            });

            return response.data;
        } catch (error) {
            throw new BadRequestException(error.response?.data || "Failed to call the gateway API");
        }
    }

    @Get("/wallets")
    async gateWayWallets() {
        try {
            const response = await request({
                url: `${process.env.GATEWAY_URL}/wallets`,
                method: "GET",
            });
            return response.data;
        } catch (error) {
            throw new BadRequestException(error.response?.data || "Failed to call the gateway API");
        }
    }

    @Get("/wallets/:id")
    async gateWayWalletById(@Param("id") id: string) {
        try {
            const response = await request({
                url: `${process.env.GATEWAY_URL}/wallets/${id}`,
                method: "GET",
            });

            return response.data;
        } catch (error) {
            throw new BadRequestException(error.response?.data || "Failed to call the gateway API");
        }
    }

    @Post("/commitments")
    async gateWayCommitment(@Body() body: any) {
        try {
            const response = await request({
                url: `${process.env.GATEWAY_URL}/commitments`,
                method: "POST",
                data: body,
            });

            return response.data;
        } catch (error) {
            throw new BadRequestException(error.response?.data || "Failed to call the gateway API");
        }
    }

    @Post("/shared-keys")
    async gateWaySharedKey(@Body() body: any) {
        try {
            const response = await request({
                url: `${process.env.GATEWAY_URL}/shared-keys`,
                method: "POST",
                data: body,
            });

            return response.data;
        } catch (error) {
            throw new BadRequestException(error.response?.data || "Failed to call the gateway API");
        }
    }
}
