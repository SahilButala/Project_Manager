"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Textarea } from "../ui/textarea";
import { countryList } from "@/app/utils/CountryList";
import { industryTypesList, rolelist } from "@/app/utils";
import { userSchema, workspaceSchmea } from "@/lib/schema";
import { toast } from "sonner";
import { createUser } from "@/app/(protected)/actions/user";



// type of user data
export type CreateWorkspaceDataType = z.infer<typeof workspaceSchmea>;

const CreateWorkspaceForm = () => {
  const [pending, setpending] = useState(false);

  // initialize form
  const form = useForm<CreateWorkspaceDataType>({
    resolver: zodResolver(workspaceSchmea),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  console.log(name, "name");

  // onsubmit handler
  const onSubmit = async (data: CreateWorkspaceDataType) => {
    try {
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong please try again..");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <Card className="min-w-95">
        <CardHeader>
          <CardTitle>Create New Workspaces</CardTitle>
          <CardDescription>
            Set up your workspaces for yourself and team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              action=""
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Workspace Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Workspace name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              {/* about section */}

              <FormField
                control={form.control}
                name="description"
                render={({ field }: any) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Tell us about yourself"
                        className="resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              ></FormField>

              <div className="flex items-center gap-4 ">
                <Button className="block" type="submit" disabled={pending}>
                  Create Workspace
                </Button>
                <Button className="block" disabled={pending} variant={"outline"}>
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateWorkspaceForm;
